import React from 'react';
import Nav from '@/components/profile/Nav';
import Filter from '@/components/filter/Filter';
import PageHeader from '@/components/general/PageHeader';

const generateFilters = () => {
  return [
    {
      type: "dropdown",
      label: "Looking for a relationship with",
      name: "search",
      options: ["Men", "Women", "Gay", "Transgender"],
      id: 1
    },
    {
        type: "dropdown",
        label: "Age",
        name: "age",
        options: [
            { min: 18, max: 25 },
            { min: 26, max: 33 },
            { min: 34, max: 41 },
            { min: 42, max: 49 },
            { min: 50, max: 57 },
            { min: 58, max: 65 },
            { min: 66, max: 73 }
        ],
        id: 2
    },
    {
      type: "dropdown",
      label: "Distance",
      name: "distance",
      options: ["100Km", "500Km", "1000Km"],
      id: 3
    },
    {
      type: "dropdown",
      label: "Height",
      name: "height",
      options: [
        { min: 3, max: 4 },
        { min: 4.1, max: 5 },
        { min: 5.1, max: 6 },
        { min: 6.1, max: 7 }
    ],
    id: 4
    },
    {
      type: "radio",
      label: "Looking for someone who is financially independent?",
      name: "finance",
      options: ["Yes", "No", "Doesn't Matter"],
      id: 5
    },
    {
      type: "checkbox",
      label: "Other",
      name: "other",
      options: ["Has photos", "Has face pictures", "Has album(s)"],
      id: 6
    }
  ];
};

export default function FilterPage() {
  const filters = generateFilters();

  return (
    <>
      <Nav />
      <section className="z-n1 ps-lg-10 px-sm-2 bg-black">
        <div className="container-fluid">
          <div className="row " data-bs-theme="dark">
            <PageHeader text={"Filter"} />
            <div className='vh-85 mh-100 h-100 overflow-hidden w-100'>
              <Filter filters={filters} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
