import * as React from "react"
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function LinkedinIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.5 31.5"
      {...props}
    >
      <path
        data-name="Icon awesome-linkedin"
        d="M29.25 0H2.243A2.26 2.26 0 000 2.271v26.958A2.26 2.26 0 002.243 31.5H29.25a2.266 2.266 0 002.25-2.271V2.271A2.266 2.266 0 0029.25 0zM9.52 27H4.852V11.967h4.675V27zM7.186 9.914a2.707 2.707 0 112.707-2.707 2.708 2.708 0 01-2.707 2.707zM27.021 27h-4.669v-7.312c0-1.744-.035-3.987-2.426-3.987-2.433 0-2.805 1.9-2.805 3.86V27h-4.669V11.967h4.479v2.053h.063a4.917 4.917 0 014.423-2.426c4.725 0 5.6 3.115 5.6 7.165z"
        fill="#fff"
      />
    </SvgIcon>
  )
}

export default LinkedinIcon