export default function Footer() {
  return (
    <footer className="h-auto w-full cursor-default bg-[#3A3A3A] px-16 py-6">
      <ul className="flex items-center justify-between text-lg text-white">
        <li>
          <a className="flex h-full w-fit items-center gap-10">
            <div>this is a sentence.</div>
          </a>
        </li>
        <li className="flex h-full w-fit items-center gap-20 capitalize">
          <a target="_blank" href="https://github.com/inseong01">
            github
          </a>
          <a target="_blank" href="https://inseong1204.tistory.com/">
            blog
          </a>
        </li>
      </ul>
    </footer>
  );
}
