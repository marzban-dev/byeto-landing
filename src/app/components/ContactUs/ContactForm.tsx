"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import axios from "axios";

type ContactFormSchema = {
    subject: string;
    first_name: string;
    last_name: string;
    email: string;
    message: string;
    role?: string;
};

const ValidationSchema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    role: yup.string().required("Role is required"),
    message: yup.string().required("Message is required")
});

const ContactForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitted, isSubmitting }
    } = useForm<ContactFormSchema>({
        // @ts-ignore
        resolver: yupResolver(ValidationSchema),
        mode: "onSubmit"
    });

    const submitHandler: SubmitHandler<ContactFormSchema> = async (data) => {
        try {
            await axios.post("https://shirazidev.ir/byeto/api/contact/", data);

            reset();

            toast.success("Wait for us to reach you 😉", {
                duration: 6000
            });
        } catch (e) {
            toast.error("Something went wrong", {
                duration: 6000
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6 max-w-[800px] w-full">
            <Input
                // @ts-ignore
                error={errors?.subject}
                {...register("subject")}
                placeholder="Subject"
                containerClassName="w-full"
            />
            <div className="flex items-center gap-4 w-full max-sm:flex-col">
                <Input
                    // @ts-ignore
                    error={errors?.first_name}
                    {...register("first_name")}
                    placeholder="First name"
                    containerClassName="w-full"
                />
                <Input
                    // @ts-ignore
                    error={errors?.last_name}
                    {...register("last_name")}
                    placeholder="Last name"
                    containerClassName="w-full"
                />
            </div>
            <div className="flex items-center gap-4 w-full max-sm:flex-col">
                <Input
                    // @ts-ignore
                    error={errors?.email}
                    {...register("email")}
                    placeholder="Email"
                    containerClassName="w-full"
                />
                <Input
                    // @ts-ignore
                    error={errors?.role}
                    {...register("role")}
                    placeholder="Role"
                    containerClassName="w-full"
                />
            </div>
            <Input
                // @ts-ignore
                error={errors?.message}
                {...register("message")}
                placeholder="Write your message"
                rows={10}
                textarea
            />
            <Button type="submit" disabled={(!isValid && isSubmitted) || isSubmitting} loading={isSubmitting}>
                Submit
            </Button>
        </form>
    );
};

export default ContactForm;