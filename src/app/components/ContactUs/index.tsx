import ContactForm from "@/app/components/ContactUs/ContactForm";
import Heading, { HeadingSizes } from "@/components/shared/Heading";

const ContactUs = () => {
    return (
        <section className="bg-black pb-24 pt-20">
            <div className="container flex flex-col justify-center items-center gap-12">
                <div>
                    <Heading gradient size={HeadingSizes.md}>
                        Contact Us
                    </Heading>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUs;