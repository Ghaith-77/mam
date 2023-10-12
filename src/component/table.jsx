import Table from "react-bootstrap/Table";

let data = [
  [
    {
      name: "ID",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
    {
      name: "الايشم",
    },
  ],
  [
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    // {
    //   name: "ghaith",
    //   id: 1,
    //   nddadsadsadsame: "ghaith",
    //   namfddsasde: "ghaith",
    //   nadadsadsadsme: "ghaith",
    //   nafddsadasamde: "ghaith",
    //   nadsadasdsadsadsadme: "ghaith",
    //   nddsdsadadaame: "ghaith",
    //   nafdsddsadme: "ghaith",
    //   dsadsa: "ghaith",
    //   namdsadadsadae: "ghaith",
    //   dsa: "ghaith",
    //   ddssa: "ghaith",
    //   nafdsame: "ghaith",
    //   ddsa: "ghaith",
    //   dsa: "ghaith",
    //   nadsame: "ghaith",
    //   dsadas: "ghaith",
    // },
    
  ]
];

function MyTable() {
  return (
    <div className="container mt-5 conteinerTable">
      <Table responsive className="MyTable ">
        <thead>
          <tr className=" text-center">
            {data[0].map((e) => (
              <th key={e.name} className="">
                {e.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" text-center">
          {data[1].map((e) => (
            <tr className="person">
              <td className=" text-danger">{e.id}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
              <td>{e.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
