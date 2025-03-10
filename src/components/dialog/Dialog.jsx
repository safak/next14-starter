"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function CustomDialog({ open, onClose, title, message }) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-soft p-6 rounded-lg shadow-lg w-96">
          <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
          <Dialog.Description className="mt-2">{message}</Dialog.Description>
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
