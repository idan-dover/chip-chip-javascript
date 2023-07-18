import Loader from "./Loader";

function FullPageLoader() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center dark:bg-slate-700 bg-slate-200 backdrop-blur-sm">
      <div role="status">
        <Loader variation="fullPage" />
      </div>
    </div>
  );
}

export default FullPageLoader;
