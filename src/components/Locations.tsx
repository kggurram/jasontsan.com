const Locations = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 gap-24 max-w-screen-xl center-items">
          <div className="outline outline-1 bg-white rounded-lg p-5 ">
            <div className="">
              <h3 className="text-3xl font-bold mb-4">Milton</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8">
              <p className="text-xl">
                In-house appointments open once a month upon number of clientele
                requests.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl">Pricing</h4>
                <ul className="list-disc pl-8 text-lg">
                  <li>Haircut: $35</li>
                  <li>Haircut + Beard: $45</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="outline outline-1 bg-white rounded-lg p-5 ">
            <div className="">
              <h3 className="text-3xl font-bold mb-4">Downtown Toronto</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8">
              <p className="text-xl">
                In-house appointments available Mondays unless stated otherwise
                on schedule and/or social media.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl">Pricing</h4>
                <ul className="list-disc pl-8 text-lg">
                  <li>Haircut: $35</li>
                  <li>Haircut + Beard: $45</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="outline outline-1 bg-white rounded-lg p-5">
            <div className="">
              <h3 className="text-2xl font-bold mb-4 flex sm:flex-row flex-col gap-2">
                <div>North York</div>
                <div className="text-slate-500">• In-Shop</div>
              </h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-8">
              <p className="text-xl">
                Barbershop appointments available Tuesday, Wednesday, Friday,
                Saturday, & Sunday.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl">
                  Shop Pricing <em>(No AmEx)</em>
                </h4>
                <ul className="list-disc pl-8 text-lg">
                  <li>Haircut: $50 + tax</li>
                  <li>Haircut + Beard: $60 + tax</li>
                </ul>
                <div className="text-md">
                  Note: This is the shop pricing. I only make commission/cut +
                  tips in shop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
