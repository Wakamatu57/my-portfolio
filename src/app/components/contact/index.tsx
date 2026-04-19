const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        CONTACT
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        お問い合わせは、
        <br className="block md:hidden" />
        メールにてお願いいたします。
      </p>
      <div className="flex justify-center space-x-8">
        <a
          href="mailto:raamenwakamatu57@gmail.com"
          className="text-blue-600 hover:underline"
        >
          raamenwakamatu57@gmail.com
        </a>
      </div>
    </div>
  );
};
export default Contact;
