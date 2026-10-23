import test from 'node:test';
import assert from 'node:assert/strict';
import { kl, Zs, Zo, ts, bl, qt, Pl, Ll, Xa, Pn, de, er, Mu, ze, lt, Pu, wl, en, Rf, Jn, js, Qf, Xf, _f } from '../src/omar/domain.js';

test('Omar model contains all five-role datasets and restores sample state safely',()=>{
 const s=kl();
 for(const key of ['members','sessions','equipment','ptSessions','payments','visits','programs','packagePurchases','gyms'])assert.ok(Array.isArray(s[key]),key);
 assert.equal(s.version,2);assert.equal(ze(s,'m1').name.en,'Salma Adel');
 assert.equal(Xf({getItem(){throw Error('blocked')}}).version,2);
});
test('entry checks eligibility and refuses a duplicate scan',()=>{
 const s=kl(), checked=Zs(s,'m1');assert.ok(qt(checked,'m1'));
 assert.equal(Zs(checked,'m1').visits.length,checked.visits.length);
 assert.equal(qt(Zs(s,'m4'),'m4'),undefined);
});
test('verified visit points settle after the stay threshold, once, with automatic checkout',()=>{
 const s=kl(),before=Pl(s),entry=Zs(s,'m1');
 assert.equal(Pl(ts(entry,29)),before);
 const settled=ts(entry,30);assert.equal(Pl(settled),before+110); // 10 visit + 100 weekly challenge
 const later=ts(settled,60);assert.equal(qt(later,'m1'),undefined);assert.equal(Pl(later),Pl(settled));
});
test('offline visits queue and synchronize without duplicating the visit',()=>{
 const entry=Zs(bl(kl(),false),'m1');assert.equal(entry.offlineQueue.length,1);assert.equal(qt(entry,'m1').synced,false);
 const online=bl(entry,true);assert.equal(online.offlineQueue.length,0);assert.equal(qt(online,'m1').synced,true);assert.equal(online.visits.length,entry.visits.length);
});
test('booking consumes capacity once and a full session creates a waitlist',()=>{
 const s=kl(),open=s.sessions.find(x=>x.day===0&&Pn(s,x)>0&&!Xa(s,x.id)&&x.time>'18:05');
 const booked=Ll(s,open.id);assert.equal(Xa(booked,open.id).status,'booked');assert.equal(Pn(booked,open),Pn(s,open)-1);assert.equal(Ll(booked,open.id).bookings.length,booked.bookings.length);
 const full=s.sessions.find(x=>x.day===0&&Pn(s,x)===0&&x.time>'18:05');assert.equal(Xa(Ll(s,full.id),full.id).status,'waitlisted');
});
test('cash renewal activates membership; pending InstaPay awaits confirmation',()=>{
 const s=kl();assert.equal(lt(s,ze(s,'m4')),'expired');
 const cash=er(s,'m4','monthly','cash');assert.equal(cash.payments[0].status,'paid');assert.equal(lt(cash,ze(cash,'m4')),'active');
 const pending=er(s,'m4','monthly','instapay');assert.equal(pending.payments[0].status,'pending');assert.equal(lt(pending,ze(pending,'m4')),'expired');
 const paid=Mu(pending,pending.payments[0].id);assert.equal(lt(paid,ze(paid,'m4')),'active');assert.deepEqual(Mu(paid,pending.payments[0].id),paid);
});
test('an immediate freeze extends membership and closes the current visit',()=>{
 const s=Zs(kl(),'m1'),end=ze(s,'m1').end,frozen=Pu(s,'m1',0,3);
 assert.equal(lt(frozen,ze(frozen,'m1')),'frozen');assert.equal(qt(frozen,'m1'),undefined);assert.notEqual(ze(frozen,'m1').end,end);
});
test('trainer confirmation consumes one package session and awards points once',()=>{
 const s=kl(),pt=de(s.ptSessions,'pt2'),before=en(s,pt.memberId,pt.trainerId),confirmed=wl(s,'pt2');
 assert.equal(en(confirmed,pt.memberId,pt.trainerId).remaining,before.remaining-1);assert.equal(Pl(confirmed,pt.memberId),Pl(s,pt.memberId)+20);assert.deepEqual(wl(confirmed,'pt2'),confirmed);
});
test('reward redemption debits points, decrements stock, and produces a code',()=>{
 const s=kl(),reward=Jn.find(r=>s.rewardStock[r.id]>0&&r.pts<Pl(s)),next=Rf(s,reward.id);
 assert.equal(Pl(next),Pl(s)-reward.pts);assert.equal(next.rewardStock[reward.id],s.rewardStock[reward.id]-1);assert.ok(next.redemptions[0].code.startsWith('FRM-'));
});
test('disconnecting health sharing revokes consent; self-logged exercise does not farm points',()=>{
 const s=kl(),shared=js(s,{wearable:true,shareWithTrainer:true}),disconnected=js(shared,{wearable:false});
 assert.equal(disconnected.consent.shareWithTrainer,false);assert.equal(disconnected.consent.wearableSource,null);
 const log=_f(s,s.programs[0].id);assert.equal(Pl(log),Pl(s));assert.equal(log.workoutLogs.length,s.workoutLogs.length+1);
 assert.ok(Qf(s).every(m=>m.age>=18));
});
