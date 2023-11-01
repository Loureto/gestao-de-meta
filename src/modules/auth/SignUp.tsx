import { HiInformationCircle } from "react-icons/hi";

import { SignUpProps } from "@/shared/models/AuthModel";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";

export const SignUp = ({ open, onOpenChange }: SignUpProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent showButtonClose={false} className="py-10 px-5">
        <DialogHeader>
          <HiInformationCircle className="w-14 h-14 text-blue-500" />
        </DialogHeader>
        <div className="flex flex-col w-full items-center mt-6">
          <h1 className="text-2xl font-semibold text-gray-900">Como posso me cadastrar?</h1>
          <p className="text-gray-500 text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
        </div>
        <DialogFooter className="w-full mt-6">
          <Button onClick={() => onOpenChange(!open)} className="w-full">Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
