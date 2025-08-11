import {
  INITIAL_CREATE_USER,
  INITIAL_STATE_CREATE_USER_FORM,
} from "@/constants/auth-constant";
import {
  CreateUserForm,
  createUserSchemaForm,
} from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createUser } from "../action";
import { Preview } from "@/types/general";
import FormUser from "./form-user";

export default function DialogCreateUser({ refetch }: { refetch: () => void }) {
  const form = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchemaForm),
    defaultValues: INITIAL_CREATE_USER,
  });

  const [createUserState, createUserAction, isPendingCreateUser] =
    useActionState(createUser, INITIAL_STATE_CREATE_USER_FORM);

  const [preview, setPreview] = useState<Preview | undefined>(undefined);

  const onSubmit = form.handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, key === "avatar_url" ? preview!.file ?? "" : value);
    });

    startTransition(() => {
      createUserAction(formData);
    });
  });

  useEffect(() => {
    if (createUserState?.status === "error") {
      toast.error("Create User Failed", {
        description: createUserState.errors?._form?.[0],
      });
    }
    if (createUserState?.status === "success") {
      toast.success("Create User Success");
      form.reset();
      setPreview(undefined);
      document.querySelector<HTMLDialogElement>("[data-state='open']")?.click();
      refetch();  // update table data after create
    }
  }, [createUserState]);
  return (
    <FormUser
      form={form}
      onSubmit={onSubmit}
      isLoading={isPendingCreateUser}
      type="Create"
      preview={preview}
      setPreview={setPreview}
    />
  );
}
