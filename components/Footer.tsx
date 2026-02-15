export default function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 h-[20vh]">
      <div className="h-full w-full bg-[url('/foot.png')] bg-cover dark:hidden" />
      <div className="hidden h-full w-full bg-[url('/night.png')] bg-cover dark:block" />
    </div>
  );
}
