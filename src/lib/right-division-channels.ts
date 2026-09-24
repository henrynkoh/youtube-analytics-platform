/**
 * Featured mid-Acts / right-division Bible teaching channels
 * for ministry analytics and benchmarking.
 * Scripture focus: 2 Timothy 2:15 (KJV)
 */
export type RightDivisionChannel = {
  id: string;
  name: string;
  handle: string;
  url: string;
  focus: string;
  ministry?: string;
};

export const MINISTRY_CHANNEL: RightDivisionChannel = {
  id: 'ohhenry6524',
  name: 'Oh Henry',
  handle: '@ohhenry6524',
  url: 'https://www.youtube.com/@ohhenry6524',
  focus: 'KJV right division · 12-week study series',
  ministry: 'Rightly Dividing the Word of Truth',
};

export const RIGHT_DIVISION_CHANNELS: RightDivisionChannel[] = [
  MINISTRY_CHANNEL,
  {
    id: 'grace-ambassadors',
    name: 'Grace Ambassadors',
    handle: '@GraceAmbassadors',
    url: 'https://www.youtube.com/@GraceAmbassadors',
    focus: 'Mid-Acts Pauline dispensational teaching',
    ministry: 'Grace Ambassadors Bible Fellowship',
  },
  {
    id: 'columbus-bible',
    name: 'Columbus Bible Church',
    handle: 'ColumbusBibleChurch',
    url: 'https://www.youtube.com/c/ColumbusBibleChurch',
    focus: 'Rightly dividing · grace age doctrine',
    ministry: 'Columbus Bible Church',
  },
  {
    id: 'hope-bible',
    name: 'Hope Bible Church',
    handle: 'HopeBibleChurch',
    url: 'https://www.youtube.com/channel/UCvuq5zTiQvMfWl9DNci7DPg',
    focus: 'KJV · prophetic vs mystery programs',
    ministry: 'Hope Bible Church',
  },
  {
    id: 'grace-for-today',
    name: 'Grace For Today',
    handle: 'GraceForToday',
    url: 'https://www.youtube.com/channel/UCOeEvhZ9Fhq32MNEkuFctPw',
    focus: 'Grace fellowship · Pauline truth',
    ministry: 'Grace For Today Bible Fellowship',
  },
  {
    id: 'paul-felter',
    name: 'Dr. Paul Felter',
    handle: 'PaulFelter',
    url: 'https://www.youtube.com/channel/UCRmB4EPMLf2QO65o22bF3eQ',
    focus: 'Dispensational Bible teaching',
  },
];

export const STUDY_HUB_URL = 'https://henrynkoh.github.io/rightlydividingkjv/';
export const STUDY_BLOG_URL = 'https://rightlydividingkjv.blogspot.com';
export const VERSE_REF = '2 Timothy 2:15';
export const VERSE_TEXT =
  'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.';
