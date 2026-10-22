import React, { useEffect, useRef } from 'react';
import { Activity, ArrowDownLeft, ArrowRight, ArrowUpRight, Bell, Bike, CalendarDays, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3, CreditCard, Download, Dumbbell, Flame, Footprints, Gift, Heart, HelpCircle, Home, LayoutDashboard, Leaf, LogOut, Map, MapPin, Menu, MessageCircle, Minus, MoreHorizontal, Pause, Pencil, Play, Plus, RefreshCw, Salad, Search, Settings, ShieldCheck, Sparkles, Star, Target, Trash2, TrendingUp, Trophy, Upload, Users, Wallet, Watch, X, Zap, Coffee, Building2, FileText, Send, Ban, Flag, CircleHelp } from 'lucide-react';

const icons = { activity: Activity, arrow: ArrowRight, up: ArrowUpRight, down: ArrowDownLeft, bell: Bell, bike: Bike, calendar: CalendarDays, check: Check, success: CheckCircle2, chevron: ChevronDown, left: ChevronLeft, right: ChevronRight, clock: Clock3, card: CreditCard, download: Download, dumbbell: Dumbbell, flame: Flame, steps: Footprints, gift: Gift, heart: Heart, help: HelpCircle, home: Home, dashboard: LayoutDashboard, leaf: Leaf, logout: LogOut, map: Map, pin: MapPin, menu: Menu, chat: MessageCircle, minus: Minus, more: MoreHorizontal, pause: Pause, edit: Pencil, play: Play, plus: Plus, reset: RefreshCw, salad: Salad, search: Search, settings: Settings, shield: ShieldCheck, sparkles: Sparkles, star: Star, target: Target, trash: Trash2, trend: TrendingUp, trophy: Trophy, upload: Upload, users: Users, wallet: Wallet, watch: Watch, close: X, zap: Zap, cup: Coffee, building: Building2, file: FileText, send: Send, ban: Ban, flag: Flag, info: CircleHelp };
export function Icon({ name, size = 20, ...rest }) { const C = icons[name] || Sparkles; return <C size={size} strokeWidth={1.7} aria-hidden="true" {...rest} />; }
export function Button({ children, icon, variant = 'primary', className = '', ...props }) { return <button type="button" className={`btn ${variant} ${className}`} {...props}>{icon && <Icon name={icon} size={17} />}{children}</button>; }
export function IconButton({ icon, label, ...props }) { return <button type="button" className="icon-button" aria-label={label} title={label} {...props}><Icon name={icon} /></button>; }
export function Badge({ children, color = '' }) { return <span className={`badge ${color}`}>{children}</span>; }
export function Avatar({ initials = 'AM', color = 'sage', size = '' }) { return <span className={`avatar ${color} ${size}`}>{initials}</span>; }
export function SectionTitle({ title, eyebrow, action, onAction }) { return <div className="section-title"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{action && <button className="text-link" onClick={onAction}>{action}<Icon name="arrow" size={16} /></button>}</div>; }
export function EmptyState({ icon = 'sparkles', title, description, action, onAction }) { return <div className="empty-state"><span className="empty-icon"><Icon name={icon} size={28} /></span><h3>{title}</h3><p>{description}</p>{action && <Button onClick={onAction}>{action}</Button>}</div>; }
export function Ring({ value = 80, size = 116, children, color = '#c9ef66' }) { const radius = 45, circumference = 2 * Math.PI * radius; return <div className="ring" style={{ width: size, height: size }}><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r={radius} stroke="currentColor" strokeWidth="9" fill="none" opacity=".13" /><circle cx="55" cy="55" r={radius} stroke={color} strokeWidth="9" fill="none" strokeDasharray={`${circumference * Math.min(100, Math.max(0, value)) / 100} ${circumference}`} strokeLinecap="round" transform="rotate(-90 55 55)" /></svg><div className="ring-label">{children || <><strong>{value}%</strong><small>completed</small></>}</div></div>; }
export function Bars({ values = [28, 47, 38, 68, 50, 88, 42], labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'], active = 4 }) { return <div className="bar-chart">{values.map((v, i) => <div className="bar-col" key={i}><div className={`bar ${i === active ? 'active' : ''}`} style={{ height: `${v}%` }} title={`${labels[i]}: ${v}`} /><span>{labels[i]}</span></div>)}</div>; }
export function Metric({ icon, label, value, suffix, change, color = 'sage' }) { return <div className="metric"><span className={`metric-icon ${color}`}><Icon name={icon} /></span><span className="muted">{label}</span><div className="metric-value">{value}<small>{suffix}</small></div>{change && <span className="metric-change">{change}</span>}</div>; }
export function Modal({ title, description, children, onClose, wide = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const before = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const handler = e => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      const focusable = [...ref.current.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]')];
      const first = focusable[0], last = focusable.at(-1);
      if (!first) { e.preventDefault(); return; }
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', handler); before?.focus(); };
  }, [onClose]);
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><section ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="dialog-title" className={`modal ${wide ? 'wide' : ''}`}><div className="modal-header"><div><h2 id="dialog-title">{title}</h2>{description && <p>{description}</p>}</div><IconButton icon="close" label="Close dialog" onClick={onClose} /></div>{children}</section></div>;
}
export function Field({ label, children, hint }) { return <label className="field"><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>; }
export function Toggle({ checked, onChange, label, description }) { return <label className="toggle-row"><span><strong>{label}</strong>{description && <small>{description}</small>}</span><input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} /><span className="toggle-track" /></label>; }
export function PageHeading({ eyebrow, title, description, children }) { return <div className="page-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>{children && <div className="heading-actions">{children}</div>}</div>; }
export function Notice({ children, icon = 'info' }) { return <div className="notice"><Icon name={icon} size={18} /><span>{children}</span></div>; }
export function DownloadDoc({ doc }) { return <a className="btn secondary" href={`data:text/plain;charset=utf-8,${encodeURIComponent(doc.text)}`} download={`${doc.name.replace(/[^a-zA-Z0-9 -]/g, '')}.txt`}><Icon name="download" size={17} />Download guide</a>; }
