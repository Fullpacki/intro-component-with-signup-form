import Form from "./Form";

function MainComponent() {
  return (
    <main className="flex flex-col px-6 gap-14 xl:flex-row">
      {/* Header */}
      <section
        id="header"
        className="flex flex-col text-center gap-5 xl:w-1/2 xl:items-center xl:justify-center xl:text-start"
      >
        <h1 className="text-3xl text-white font-bold w-full xl:text-5xl">
          Learn to code by watching others
        </h1>
        <h2 className="text-[#FFF5F3] font-medium">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </h2>
      </section>
      {/* Header */}
      <Form />
    </main>
  );
}

export default MainComponent;
