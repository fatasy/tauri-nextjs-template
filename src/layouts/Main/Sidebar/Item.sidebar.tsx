import { InternalRouteType } from 'antd/es/breadcrumb/Breadcrumb'
import Link, { LinkProps } from 'next/link'
import { IconType } from 'react-icons'
import { tv } from 'tailwind-variants'

import { Text } from '@/components/Text'

export type ItemSidebarType = {
  label: string
  index: string
  icon?: IconType
  active?: boolean
  href: LinkProps<InternalRouteType>['href']
}

type ItemSidebarProps = {
  item: ItemSidebarType
  active?: boolean
}

export function ItemSidebar({
  item: { label, icon: Icon, href },
  active,
}: ItemSidebarProps) {
  return (
    <div className={styles({ active })}>
      <Link
        href={href}
        className="flex flex-col justify-center items-center font-medium"
      >
        {Icon && <Icon size={32} />}
        <Text className="mt-6 mb-1 font-sf text-base">{label}</Text>
      </Link>
    </div>
  )
}

const styles = tv({
  base: 'p-4 mb-4 rounded hover:bg-primary hover:text-white',
  variants: {
    active: {
      true: 'bg-primary text-white',
      false: 'text-primary',
    },
  },
  defaultVariants: {
    active: false,
  },
})
