import type { Sidebar } from 'vocs';

export const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: 'Getting Started', link: '/getting-started' }],
  },
  {
    text: 'Farcaster Kit',
    items: [
      {
        text: 'Introduction',
        link: '/farcaster/introduction',
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getFarcasterUserAddress',
            link: '/farcaster/get-farcaster-user-address',
          },
        ],
      },
      {
        text: 'Types',
        link: '/farcaster/types',
      },
    ],
  },
  {
    text: 'Frame Kit',
    items: [
      { text: 'Introduction', link: '/frame/introduction' },
      {
        text: 'Components',
        items: [
          {
            text: 'FrameMetadata',
            link: '/frame/frame-metadata',
          },
        ],
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getFrameHtmlResponse',
            link: '/frame/get-frame-html-response',
          },
          {
            text: 'getFrameMessage',
            link: '/frame/get-frame-message',
          },
          {
            text: 'getFrameMetadata',
            link: '/frame/get-frame-metadata',
          },
        ],
      },
      {
        text: 'Framegear',
        link: '/frame/framegear',
      },
      {
        text: 'Types',
        link: '/frame/types',
      },
    ],
  },
  {
    text: 'Identity Kit',
    items: [
      { text: 'Introduction', link: '/identity/introduction' },
      {
        text: 'Components',
        items: [
          {
            text: 'Avatar',
            link: '/identity/avatar',
          },
          {
            text: 'Name',
            link: '/identity/name',
          },
        ],
      },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getEASAttestations',
            link: '/identity/get-eas-attestations',
          },
        ],
      },
      {
        text: 'Types',
        link: '/identity/types',
      },
    ],
  },
  {
    text: 'XMTP Kit',
    items: [
      { text: 'Introduction', link: '/xmtp/introduction' },
      {
        text: 'Utilities',
        items: [
          {
            text: 'getXmtpFrameMessage',
            link: '/xmtp/get-xmtp-frame-message',
          },
          {
            text: 'isXmtpFrameRequest',
            link: '/xmtp/is-xmtp-frame-request',
          },
        ],
      },
    ],
  },
] as const satisfies Sidebar;
