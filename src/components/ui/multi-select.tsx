import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface MultiSelectProps {
  value: string[]
  onValueChange: (selected: string[]) => void
  children: React.ReactNode
}

const MultiSelect = ({ value, onValueChange, children }: MultiSelectProps) => {
  return <>{children}</>
}

const MultiSelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          ref={ref}
          className={cn(
            "inline-flex w-full items-center justify-between rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-2 text-left text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#E2768A]",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="ml-2 h-4 w-4 text-white" />
        </button>
      </PopoverTrigger>
      {props.children}
    </Popover>
  )
})
MultiSelectTrigger.displayName = "MultiSelectTrigger"

const MultiSelectContent = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <PopoverContent
      align="start"
      className={cn(
        "z-50 w-full rounded-md border border-zinc-700 bg-[#1c1d21] p-1 text-white shadow-md",
        className
      )}
    >
      <div className="max-h-60 overflow-y-auto p-1 text-sm">{children}</div>
    </PopoverContent>
  )
}

const MultiSelectItem = ({
  value,
  selected,
  onSelect,
  className,
  children,
}: {
  value: string
  selected?: boolean
  onSelect?: (val: string) => void
  className?: string
  children: React.ReactNode
}) => {
  return (
    <button
      role="option"
      aria-selected={selected}
      onClick={() => onSelect?.(value)}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#E2768A]/20",
        className
      )}
    >
      <span>{children}</span>
      {selected && <Check className="h-4 w-4 text-emerald" />}
    </button>
  )
}

const MultiSelectValue = ({ value, placeholder }: { value?: string[]; placeholder: string }) => {
  if (!value || value.length === 0) return <span className="text-gray-400">{placeholder}</span>
  return <span>{value.join(", ")}</span>
}

export {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectValue,
}
