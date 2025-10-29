import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Option = {
  label: string
  value: string
}

interface SelectCustomProps {
  label?: string
  placeholder?: string
  groupLabel?: string
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export default function SelectCustom({
  label = "Select",
  placeholder = "Choose an option",
  groupLabel,
  options,
  value,
  onChange,
}: SelectCustomProps) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium text-gray-400">{label}</label>}

      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
