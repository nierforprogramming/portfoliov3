const Credits = () => {
  return (
    <section className="my-4 space-y-2 md:flex md:justify-between">
      <div>
        <p className="text-neutral-300 tracking-wide text-sm">
          Built with <b className="text-neutral-0">React.js</b> for the modern
          web 🚀
        </p>
      </div>

      <div>
        <p className="text-neutral-300 tracking-wide text-sm">
          Copyright &copy;{new Date().getFullYear()}, Niraj, All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Credits;
