import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductTab() {
    const data = [
      {
        label: "LIP",
        value: "lip",
        prod: [
            {
                title: "PLUMP JUICE",
                image: "/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png",
                beseSeller: true
            },
            {
                title: "PLUMP & FILL LIP LINER",
                image: "/Placement_Area_c1acb99c-eeac-4c52-9b62-a4b565a06160.png",
                beseSeller: false
            },
            {
                title: "PLUMP KITS",
                image: "/Placement_Area1.png",
                beseSeller: false
            }
        ],
      },
      {
        label: "FACE",
        value: "face",
        prod: [
            {
                title: "PLUMP FIX",
                image: "/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png",
                beseSeller: false
            },
            {
                title: "FACE KITS",
                image: "/Placement_Area_c1acb99c-eeac-4c52-9b62-a4b565a06160.png",
                beseSeller: false
            }
        ],
      },
      {
        label: "KITS",
        value: "kits",
        prod: [
            {
                title: "FILTER FREE",
                image: "/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png",
                beseSeller: false
            },
            {
                title: "THE FULL WORKS",
                image: "/Placement_Area_c1acb99c-eeac-4c52-9b62-a4b565a06160.png",
                beseSeller: false
            },
            {
                title: "EXTREME PRIME & PLUMP",
                image: "/Placement_Area1.png",
                beseSeller: false
            }
        ],
      },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mt-12 border-t-1 border-regal-orange">
            <div className="border-r-1 border-regal-orange col-span-2">
                <Tabs value="lip">
                <div className="flex flex-1 items-center justify-center mt-6 sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                  <TabsHeader 
        className=""
        indicatorProps={{
          className: "bg-gray-900/1 shadow-none !text-gray-900",
        }}>
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value}
                        activeClassName="bg-regal-orange text-white" 
                        className="border border-regal-orange font-bold hover:bg-regal-orange hover:text-white ml-2 px-4 py-2 rounded-full text-sm"
                        >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  </div>
                </div>
                  <TabsBody>
                    {data.map(({ value, prod }) => (
                      <TabPanel key={value} value={value}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                            {prod.map((product) => (
                              <div
                                key={product.title}
                                className="bg-white border duration-300 h-50 hover:bg-regal-orange hover:shadow-xl hover:text-white overflow-hidden px-2 py-2 rounded-3xl shadow-lg text-center text-orange transition-shadow"
                              >
                                <Image
                                  src={product.image ? product.image : "/no-image.jpeg"}
                                  alt={product.title}
                                  width={224}
                                  height={224}
                                  className="cursor-pointer object-cover rounded-3xl w-full h-30"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="p-3 align-middle">
                                    {product.beseSeller && <button className="bg-regal-orange font-bold px-2 rounded-full text-sm text-white hover:bg-white hover:text-regal-orange">BEST SELLER</button>}
                                    <h2 className="cursor-pointer font-semibold text-sm">
                                      {product.title}
                                    </h2>
                                </div>
                              </div>
                            ))}
                            <div
                              key="SHOP ALL KITS"
                              className="border duration-300 h-50 bg-regal-orange hover:shadow-xl overflow-hidden px-2 py-2 rounded-3xl shadow-lg text-center text-white transition-shadow"
                            >
                              <Image
                                src="/no-image.jpeg"
                                alt="SHOP ALL KITS"
                                width={224}
                                height={224}
                                className="cursor-pointer object-cover rounded-3xl w-full h-30"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="p-3 m-auto justify-center items-center">
                                  <h2 className="cursor-pointer font-semibold text-sm">
                                    SHOP ALL KITS
                                  </h2>
                              </div>
                            </div>
                        </div>
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
            </div>
            <div className="mt-15">
              <ul className="font-semibold text-lg">
                <li className="mb-4">ABOUT PROJECT</li>
                <li className="mb-4">CLINICALLY PROVEN</li>
                <li className="mb-4">FAQS</li>
                <li className="mb-4">CONTACT US</li>
              </ul>
            </div>
        </div>
    );
}