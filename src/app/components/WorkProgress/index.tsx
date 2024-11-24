import ProgressStep from "@/app/components/WorkProgress/ProgressStep";
import ImageCounseling from "@/assets/images/counseling.svg";
import ImageDesigning from "@/assets/images/designing.svg";
import ImageDeveloping from "@/assets/images/developing.svg";
import Paragraph from "@/components/shared/Paragraph";

const WorkProgress = () => {
    return (
        <section className="py-[100px] w-full overflow-hidden bg-black flex flex-col items-center gap-24 relative">
            <div
                className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-800 via-gray-800 to-transparent via-85% lg:via-75% to-[88%] lg:to-[82%] z-10"></div>
            <ProgressStep icon="fa-hands-helping" id="1" title="Counseling with You" image={ImageCounseling}>
                Our counseling service goes beyond just listening – were here to understand your goals, challenges, and
                aspirations. well help you navigate the digital
                landscape with confidence and clarity.
            </ProgressStep>
            <ProgressStep icon="fa-pen" id="2" title="Designing" image={ImageDesigning} reverse>
                Design is at the heart of everything we do. From sleek user interfaces to captivating visual identities,
                our design team crafts experiences that captivate and inspire. Let us bring your ideas to life with
                creativity and precision.
            </ProgressStep>
            <ProgressStep icon="fa-code" id="3" title="Developing" image={ImageDeveloping}>
                Coding is our language, and innovation is our mantra. With expertise across a wide range of
                technologies, our development team transforms concepts into robust, scalable solutions.
            </ProgressStep>
            <div className="flex justify-center items-end h-[120px] pb-4 z-20">
                <div
                    className="flex justify-center items-center size-[50px] rounded-full bg-gradient-to-br from-primary to-black text-white shadow-2xl">
                    4
                </div>
            </div>
            <div className="max-w-[290px] 2xs:max-w-[400px] flex flex-col justify-center items-center gap-4 z-20">
                <span className="text-white font-semibold text-[1.25rem] text-center">
                    Submission
                </span>
                <Paragraph variant="gray" className="leading-[1.8] text-center">
                    Once you entrust us with your
                    vision, our team swings into action, collaborating closely with you every step of the way to ensure
                    a seamless and successful execution. Lets bring your project to life, together.
                </Paragraph>
            </div>
        </section>
    );
};

export default WorkProgress;
