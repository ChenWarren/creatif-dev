

export default function HomeAbout() {
  return (
    <section className=" bg-[#5DD9BF]">
      <div className="sm:h-20 h-10"></div>
      <div className="grid sm:grid-cols-2">
        <div className="col-span-1 sm:h-[400px] h-full">
          <div className="h-20 bg-white flex sm:justify-end sm:rounded-r-full">
            <div className="max-w-[448px] w-full px-4 flex items-center">
              <h1 className="text-[48px]">About Me</h1>
            </div>
          </div>
          <div className="h-ful flex sm:justify-end pb-10">
            <div className="sm:max-w-[448px] w-full sm:p-4 px-4 flex flex-col items-center text-white">
              <p className="py-2 mt-10">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>

              <p className="py-2">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

              <p className="py-2">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            </div>
          </div>

        </div>
        <div className="col-span-1 flex sm:justify-end">
          <div className="sm:w-[500px] sm:h-[600px] sm:rounded-tl-3xl w-full h-[350px] bg-[url('/home-about.png')] bg-cover bg-no-repeat">
          </div>
        </div>
      </div>
    </section>
  )
}

// bg-[url('/home-about.png')]