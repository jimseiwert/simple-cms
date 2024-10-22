import { Trash } from "lucide-react";
import * as React from "react"
import { Button } from "../ui/button";
import { DeleteConfirmation } from "./alerts";

export enum ButtonTypes {
  Icon_Only = "icon-only",
  Text_Only = "text-only",
  Icon_And_Text = "icon-and-text",
  Icon_And_Custom_Text = "icon-and-custom-text"
}
export interface ButtonProps {
  type: ButtonTypes;
  text?: string;
  onClick: () => void
}
const DeleteButton = ({ type = ButtonTypes.Icon_Only, text, onClick }: ButtonProps) => {
  let btn: React.ReactNode;
  switch (type) {
    case ButtonTypes.Icon_Only:
      btn = (
        <Button
          className="text-red-500"
        >
          <Trash />
        </Button>
      )
    case ButtonTypes.Text_Only:
      btn =  (
        <Button
          className="text-red-500"
        >
          Delete
        </Button>
      )
    case ButtonTypes.Icon_And_Text:
      btn =  (
        <Button
          className="text-red-500"
        >
          <Trash />
          Delete
        </Button>
      )
    case ButtonTypes.Icon_And_Custom_Text:
      btn =  (
        <Button
          className="text-red-500"
        >
          <Trash />
          {text}
        </Button>
      )
  }
  return (<DeleteConfirmation onClick={onClick} button={btn} />)
}
export {
  DeleteButton
}


//<Button size="icon" className="trash-icon" variant="destructive"><Trash/></Button>