import Link from 'next/link'
import { tv } from 'tailwind-variants'

import Text from '@/components/Text'

export type ItemSidebarType = {
  label: string
  index: string
  icon?: React.ReactNode
  active?: boolean
  href: string
}

export function ItemSidebar({ icon, label, active }: ItemSidebarType) {
  const { base } = classNames({
    active,
  })

  return (
    <div className={base({ active })}>
      <Link
        href="/dedwed"
        className="flex flex-col justify-center items-center"
      >
        {icon}
        <Text className="mt-4 mb-1 font-sf text-base">{label}</Text>
      </Link>
    </div>
  )
}

const classNames = tv({
  slots: {
    base: 'p-4 mb-4 rounded hover:bg-[#003049] hover:text-white cursor-pointer',
  },
  variants: {
    active: {
      true: 'bg-[#003049] text-white',
    },
  },
  defaultVariants: {
    active: false,
  },
})
