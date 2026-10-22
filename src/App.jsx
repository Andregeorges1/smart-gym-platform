import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Avatar, Badge, Button, Icon, IconButton, Modal } from './components.jsx';
import { STORAGE_KEY, initialState, loadState } from './domain.js';
import { BookingsPage, CommunityPage, FoodPage, GymMapPage, HealthPage, HomePage, MembershipPage, RewardsPage, TrainingPage } from './MemberPages.jsx';
import { AdminPage, PlatformPage, TrainerPage } from './Operations.jsx';
import Dialogs from './Dialogs.jsx';

const nav = {
  member: [['home','home','Overview'],['train','dumbbell','My training'],['map','map','Explore the gym'],['bookings','calendar','Bookings'],['community','users','Community'],['rewards','gift','Rewards'],['food','salad','Food & fuel'],['membership','card','Membership'],['health','watch','Health & activity']],
  trainer: [['overview','dashboard','Overview'],['clients','users','My members'],['calendar','calendar','Session calendar'],['programs','dumbbell','Programs & guidance'],['messages','chat','Messages']],
  admin: [['overview','dashboard','Overview'],['members','users','Memberships'],['bookings','calendar','Bookings & classes'],['equipment','map','Equipment & map'],['rewards','gift','Rewards & challenges'],['partners','salad','Food partnerships'],['reports','trend','Reports & activity']],
  platform: [['overview','building','Platform overview']],
};
const roleNames={member:'Member',trainer:'Trainer',admin:'Gym owner',platform:'Platform admin'};
const tourSteps=[
  {role:'member',page:'home',title:'A club that feels like theirs.',text:'Start with the member’s everyday experience: their club, their next workout, live demo occupancy, and a reason to come back.'},
  {role:'member',page:'map',title:'Their gym, right at their fingertips.',text:'Tap a machine to see instructions and suitable workouts. Every machine is manually registered and positioned for this branch.'},
  {role:'member',page:'bookings',title:'Turn a good intention into a booking.',text:'Book Strength & sculpt, or explore the full-class waitlist. Then switch to the gym owner role to see the reservation.'},
  {role:'trainer',page:'programs',title:'Coaching that connects the dots.',text:'Build a program using branch equipment and share nutrition guidance. The member can see and use both immediately.'},
  {role:'member',page:'rewards',title:'Make consistency worth coming back for.',text:'Try redeeming a smoothie. The points ledger and gym reward inventory update together. Complete a workout to earn more.'},
  {role:'member',page:'food',title:'A local ecosystem around the club.',text:'Build a bag, use points, and complete a simulated order. The gym owner sees the order and illustrative commission.'},
  {role:'admin',page:'overview',title:'One clear view of the club.',text:'Explore reservations, equipment, membership payments, rewards, and partner orders. The actions you took as a member are all here.'},
];
function readRoute(){const [role,page]=window.location.hash.replace(/^#\/?/,'').split('/');return nav[role]?.some(n=>n[0]===page)?{role,page}:{role:'member',page:'home'}}

export default function App(){
  const [s,setState]=useState(()=>loadState(localStorage));
  const [route,setRoute]=useState(readRoute),[dialog,setDialog]=useState(null),[toast,setToast]=useState(''),[menu,setMenu]=useState(false),[tour,setTour]=useState(-1),[searchOpen,setSearchOpen]=useState(false),[search,setSearch]=useState(''),[saveError,setSaveError]=useState(false);
  const toastTimer=useRef();
  const {role,page}=route;
  const update=useCallback(fn=>setState(prev=>typeof fn==='function'?fn(prev):fn),[]);
  const close=useCallback(()=>setDialog(null),[]);
  const notify=useCallback(text=>{setToast(text);clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),5000)},[]);
  const open=useCallback((type,data)=>setDialog({type,data}),[]);
  const go=useCallback((nextPage,nextRole,data)=>{
    if(data!==undefined){setDialog({type:nextPage,data});return}
    const r=nextRole||route.role;
    if(!nav[r]?.some(n=>n[0]===nextPage)){setDialog({type:nextPage});return}
    setRoute({role:r,page:nextPage});window.history.replaceState(null,'',`#/${r}/${nextPage}`);setMenu(false);setDialog(null);window.scrollTo({top:0,behavior:'instant'});
  },[route.role]);
  useEffect(()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,state:s}));setSaveError(false)}catch{setSaveError(true)}},[s]);
  useEffect(()=>{const change=()=>setRoute(readRoute());window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change)},[]);
  useEffect(()=>()=>clearTimeout(toastTimer.current),[]);
  const reset=()=>{setState(initialState());setTour(-1);go('home','member')};
  const selectRole=r=>go(nav[r][0][0],r);
  const changeTour=index=>{if(index>=tourSteps.length||index<0){setTour(-1);return}setTour(index);go(tourSteps[index].page,tourSteps[index].role)};
  const navItem=nav[role].find(n=>n[0]===page);
  const common={s,update,open,go,notify,role};
  const memberPages={home:HomePage,train:TrainingPage,map:GymMapPage,bookings:BookingsPage,community:CommunityPage,rewards:RewardsPage,food:FoodPage,membership:MembershipPage,health:HealthPage};
  const MemberComponent=memberPages[page]||HomePage;
  const searchResults=Object.entries(nav).flatMap(([r,items])=>items.map(([p,icon,label])=>({role:r,page:p,icon,label}))).filter(x=>`${x.label} ${roleNames[x.role]}`.toLowerCase().includes(search.toLowerCase()));
  return <div className="app-shell">
    {menu&&<button className="sidebar-scrim" aria-label="Close navigation" onClick={()=>setMenu(false)}/>}
    <aside className={`sidebar ${menu?'is-open':''}`}>
      <a className="brand" href="#/member/home" onClick={e=>{e.preventDefault();go('home','member')}}><span className="brand-symbol"><span/><span/><span/></span><span>forma<span className="brand-dot">.</span></span></a>
      <div className="workspace-label">YOUR CLUB EXPERIENCE</div>
      <button className="branch-switch" onClick={()=>open('occupancy')}><span className="branch-mark">{s.logo?<img src={s.logo} alt="Club logo"/>:<Icon name="building" size={21}/>}</span><span><strong>{s.gymName}</strong><small>{s.branch}</small></span><Icon name="chevron" size={14}/></button>
      <span className="nav-label">{role==='member'?'YOUR EVERYDAY':role==='trainer'?'YOUR COACHING':role==='admin'?'YOUR OPERATIONS':'YOUR PLATFORM'}</span>
      <nav aria-label="Main navigation">{nav[role].map(([p,icon,label])=><button key={p} className={`nav-item ${p===page?'active':''}`} onClick={()=>go(p)} aria-current={p===page?'page':undefined}><Icon name={icon} size={20}/><span>{label}</span>{p==='rewards'&&<span className="nav-points">{s.points>=1000?`${(s.points/1000).toFixed(1)}k`:s.points}</span>}{p===page&&<span className="active-dot"/>}</button>)}</nav>
      <div className="sidebar-bottom"><section className="sidebar-promo"><span className="promo-flower">✳</span><strong>A little support.<br />A lot of possibility.</strong><p>Your coach is in your corner.</p><button onClick={()=>role==='member'?open('client'):open('help')}>Let’s connect<Icon name="up" size={15}/></button></section><button className="nav-item" onClick={()=>open('branding')}><Icon name="settings" size={19}/><span>Demo settings</span></button><button className="nav-item" onClick={()=>open('help')}><Icon name="help" size={19}/><span>A little help</span></button><div className="sidebar-profile"><Avatar initials={role==='trainer'?'OA':role==='admin'?'AG':'AM'} color="peach"/><span><strong>{role==='member'?s.memberName:role==='trainer'?s.assignedTrainer:role==='admin'?'Andre Georges':'Platform team'}</strong><small>{roleNames[role]} experience</small></span><Icon name="shield" size={16}/></div></div>
    </aside>
    <div className="main-shell"><header className="topbar"><div className="topbar-leading"><button className="mobile-menu icon-button" aria-label="Open navigation" onClick={()=>setMenu(true)}><Icon name="menu"/></button><span className="breadcrumb">Your space<span>/</span><strong>{navItem?.[2]}</strong></span></div><div className="topbar-actions"><button className="header-search" onClick={()=>setSearchOpen(true)} aria-label="Search the prototype"><Icon name="search" size={18}/><span>Find your next step</span><kbd>⌕</kbd></button><span className="topbar-divider"/><span className="club-location"><Icon name="pin" size={15}/>{s.branch}</span><button className="notification-button icon-button" aria-label="View notifications" onClick={()=>open('notifications')}><Icon name="bell" size={20}/><i/></button><button className="profile-button" aria-label="View your profile" onClick={()=>open(role==='member'?'client':'help')}><Avatar initials={role==='trainer'?'OA':role==='admin'?'AG':'AM'} color="peach" size="small"/></button></div></header>
      <div className="demo-toolbar"><span className="demo-indicator"><i/>INTERACTIVE DEMO <span>· Sample data</span></span><div className="role-switch" role="group" aria-label="Demo experience">{['member','trainer','admin'].map(r=><button key={r} className={role===r?'active':''} onClick={()=>selectRole(r)}>{roleNames[r]}</button>)}<select aria-label="More demo roles" value={role==='platform'?'platform':''} onChange={e=>e.target.value&&selectRole(e.target.value)}><option value="">More</option><option value="platform">Platform admin</option></select></div><button className="tour-trigger" onClick={()=>changeTour(0)}><Icon name="play" size={14}/><span>Walk me through</span></button></div>
      {saveError&&<div className="storage-warning" role="status">Browser storage is unavailable. Your demo still works, but changes may not survive a refresh.</div>}
      <main className="page-content" id="main-content">{role==='member'?<MemberComponent key={`member-${page}`} {...common}/>:role==='trainer'?<TrainerPage key={`trainer-${page}`} page={page} {...common}/>:role==='admin'?<AdminPage key={`admin-${page}`} page={page} {...common}/>:<PlatformPage {...common}/>}</main>
      <footer className="app-footer"><span><span className="footer-brand">forma.</span> A little stronger, together.</span><div><span>Presentation prototype · No real payments or integrations</span><button onClick={()=>open('reset')}><Icon name="reset" size={13}/>Reset demo</button></div></footer>
    </div>
    <div className="mobile-bottom-nav">{[['home','home','Home'],['train','dumbbell','Train'],['bookings','calendar','Book'],['community','users','Connect']].map(([p,i,l])=><button key={p} className={page===p&&role==='member'?'active':''} onClick={()=>go(p,'member')}><Icon name={i} size={20}/><span>{l}</span></button>)}<button onClick={()=>setMenu(true)} className={menu?'active':''}><Icon name="menu" size={20}/><span>More</span></button></div>
    {dialog&&<Dialogs key={`${dialog.type}-${dialog.data?.id||''}`} dialog={dialog} {...common} close={close} reset={reset}/>}
    {searchOpen&&<Modal title="Find your next step" description="Search features and workspaces in the prototype." onClose={()=>{setSearchOpen(false);setSearch('')}}><label className="search-field full"><Icon name="search" size={18}/><input autoFocus placeholder="Try rewards, bookings, or trainer" aria-label="Search features" value={search} onChange={e=>setSearch(e.target.value)}/></label><div className="global-results">{searchResults.map(r=><button key={`${r.role}-${r.page}`} className="list-row clickable full" onClick={()=>{go(r.page,r.role);setSearchOpen(false);setSearch('')}}><Icon name={r.icon}/><span className="grow align-left"><strong>{r.label}</strong><small>{roleNames[r.role]} experience</small></span><Icon name="arrow" size={16}/></button>)}{!searchResults.length&&<p className="muted">No matching feature. Try a different search.</p>}</div></Modal>}
    {tour>=0&&<aside className="tour-panel" aria-label="Guided sales tour"><div className="spread"><span className="eyebrow">YOUR GYM, CONNECTED · {tour+1} / {tourSteps.length}</span><IconButton icon="close" label="Close tour" onClick={()=>setTour(-1)}/></div><h3>{tourSteps[tour].title}</h3><p>{tourSteps[tour].text}</p><div className="spread"><button className="text-link muted" onClick={()=>changeTour(tour-1)}>{tour===0?'Close':'Back'}</button><Button onClick={()=>changeTour(tour+1)}>{tour===tourSteps.length-1?'Ready to explore':'Next stop'}<Icon name="arrow" size={16}/></Button></div></aside>}
    {toast&&<div className="toast" role="status"><Icon name="success" size={21}/><span>{toast}</span><button aria-label="Dismiss notification" onClick={()=>setToast('')}><Icon name="close" size={16}/></button></div>}
  </div>;
}
