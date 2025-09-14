import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    // Update hidden inputs before sending
    const dateInput = form.current.querySelector<HTMLInputElement>(
      'input[name="submission_date"]'
    );
    const timeInput = form.current.querySelector<HTMLInputElement>(
      'input[name="submission_time"]'
    );
    if (dateInput) dateInput.value = formattedDate;
    if (timeInput) timeInput.value = formattedTime;

    emailjs
      .sendForm(
        "service_zzuumgv",
        "template_86kzlc5", // Updated Template ID
        form.current,
        "KmPeO7iywmQV_k8Qo"
      )
      .then(
        () => {
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-sm w-full bg-white text-[hsl(var(--npd-orange))] border border-[hsl(var(--npd-orange))] shadow-md rounded-lg p-3`}
              >
                <strong className="block text-base">Email sent ✅</strong>
                <p className="text-xs mt-1">
                  {formattedDate} at {formattedTime}
                </p>
              </div>
            ),
            { duration: 4000, position: "top-center" }
          );
          form.current?.reset();
        },
        (err) => {
          console.error(err);
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-sm w-full bg-white text-red-600 border border-red-600 shadow-md rounded-lg p-3`}
              >
                <strong className="block text-base">Error ❌</strong>
                <p className="text-xs mt-1">
                  {formattedDate} at {formattedTime}
                </p>
              </div>
            ),
            { duration: 4000, position: "top-center" }
          );
        }
      );
  };

  return (
    <div className="relative z-10">
      <Toaster />

      <form
        ref={form}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto mb-10"
        onSubmit={sendEmail}
      >
        <input
          name="user_email"
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-[hsl(var(--npd-orange))] focus:outline-none"
        />

        {/* Hidden inputs for date and time */}
        <input type="hidden" name="submission_date" value="" />
        <input type="hidden" name="submission_time" value="" />

        <Button
          type="submit"
          className="btn-npd-primary rounded-xl font-semibold sm:mt-0 mt-4"
        >
          Notify Me
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;