import { MenuEntry } from '@nguyenphu27/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'http://localhost:3000/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://localhost:3000/#/pool',
      }
    ],
  },
]

export default config
