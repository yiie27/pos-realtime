import FormInput from "@/components/common/form-input";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import {
  INITIAL_CREATE_USER,
  INITIAL_STATE_CREATE_USER_FORM,
  ROLE_LIST,
} from "@/constants/auth-constant";
import {
  CreateUserForm,
  createUserSchemaForm,
} from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createUser } from "../action";
import FormSelect from "@/components/common/form-select";

export default function DialogCreateUser({ refetch }: { refetch: () => void }) {
  const form = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchemaForm),
    defaultValues: INITIAL_CREATE_USER,
  });

  const [createUserState, createUserAction, isPendingCreateUser] =
    useActionState(createUser, INITIAL_STATE_CREATE_USER_FORM);

  const onSubmit = form.handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
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
      document.querySelector<HTMLDialogElement>("[data-state='open']")?.click();
      refetch();
    }
  }, [createUserState]);
  return (
    <DialogContent className="sm:max-w-[425px]">
      <Form {...form}>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Fill in the form below to create a new user.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormInput
            form={form}
            name="name"
            label="Name"
            placeholder="Insert your name"
          />
          <FormInput
            form={form}
            name="email"
            label="Email"
            placeholder="Insert your email"
            type="email"
          />
          <FormSelect
            form={form}
            name="role"
            label="Role"
            selectItem={ROLE_LIST}
          />
          <FormInput
            form={form}
            name="password"
            label="Password"
            placeholder="******"
            type="password"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {isPendingCreateUser ? <Loader2 /> : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
