import Link from "next/link"
import { tv } from "tailwind-variants"

import Text from "@/components/Text"

export type ItemSidebarType = {
  label: string
  index: string
  icon?: React.ReactNode
  active?: boolean
}

const sidebarItem = tv({
  base: "p-4 mb-4 rounded",
  variants: {
    active: {
      true: "bg-[#003049] text-white",
    },
  },
  defaultVariants: {
    active: false,
  },
})

export function ItemSidebar({ icon, label, active }: Omit<ItemSidebarType, "key">) {
  return (
    <div className={sidebarItem({ active })}>
      <Link href="#" className="flex flex-col justify-center items-center ">
        {icon}
        <Text className="mt-4 mb-1 font-SF-Text text-[16px]">{label}</Text>
      </Link>
    </div>
  )
}
