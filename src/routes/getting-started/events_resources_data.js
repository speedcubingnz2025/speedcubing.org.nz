import Event222 from './events/Event222.svelte';
import Event333 from './events/Event333.svelte';
import Event333bf from './events/Event333bf.svelte';
import Event333fmc from './events/Event333fmc.svelte';
import Event333mbf from './events/Event333mbf.svelte';
import Event333oh from './events/Event333oh.svelte';
import Event444 from './events/Event444.svelte';
import Event444bf from './events/Event444bf.svelte';
import Event555 from './events/Event555.svelte';
import Event555bf from './events/Event555bf.svelte';
import Event666 from './events/Event666.svelte';
import Event777 from './events/Event777.svelte';
import EventClock from './events/EventClock.svelte';
import EventMinx from './events/EventMinx.svelte';
import EventPyram from './events/EventPyram.svelte';
import EventSkewb from './events/EventSkewb.svelte';
import EventSq1 from './events/EventSq1.svelte';

export const events = [
  { id: '333', component: Event333, title: '3x3 CUBE' },
  { id: '222', component: Event222, title: '2x2 CUBE' },
  { id: '444', component: Event444, title: '4x4 CUBE' },
  { id: '555', component: Event555, title: '5x5 CUBE' },
  { id: '666', component: Event666, title: '6x6 CUBE' },
  { id: '777', component: Event777, title: '7x7 CUBE' },
  { id: '333bf', component: Event333bf, title: '3x3 BLINDFOLDED' },
  { id: '333fm', component: Event333fmc, title: '3x3 FMC' },
  { id: '333oh', component: Event333oh, title: '3x3 ONE-HANDED' },
  { id: 'clock', component: EventClock, title: 'CLOCK' },
  { id: 'minx', component: EventMinx, title: 'MEGAMINX' },
  { id: 'pyram', component: EventPyram, title: 'PYRAMINX' },
  { id: 'skewb', component: EventSkewb, title: 'SKEWB' },
  { id: 'sq1', component: EventSq1, title: 'SQUARE-1' },
  { id: '444bf', component: Event444bf, title: '4x4 BLINDFOLDED' },
  { id: '555bf', component: Event555bf, title: '5x5 BLINDFOLDED' },
  { id: '333mbf', component: Event333mbf, title: '3x3 MULTI-BLIND' },

];
