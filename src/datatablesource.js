export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },

  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="a" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: 'class',
    headerName: 'Class',
    width: 50,
  },

  {
    field: 'fees',
    headerName: 'Fees Paid',
    width: 100,
  },
  {
    field: 'parent_name',
    headerName: 'Parent Name',
    width: 150,
  },
  {
    field: 'parent_number',
    headerName: 'Parent Number',
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    pname: 'Mr Kofi Manu',
    class: 4,
    fees: 35,
    pnumber: '0244513455',
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 6,
    pname: 'Mr Kofi Manu',
    fees: 42,
    pnumber: '0244513455',
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 2,
    pname: 'Mr Kofi Manu',
    fees: 45,
    pnumber: '0244513455',
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 7,
    pname: 'Mr Kofi Manu',
    fees: 16,
    pnumber: '0244513455',
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 5,
    pname: 'Mr Kofi Manu',
    fees: 22,
    pnumber: '0244513455',
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 9,
    pname: 'Mr Kofi Manu',
    fees: 15,
    pnumber: '0244513455',
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 1,
    pname: 'Mr Kofi Manu',
    fees: 44,
    pnumber: '0244513455',
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 3,
    pname: 'Mr Kofi Manu',
    fees: 36,
    pnumber: '0244513455',
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 4,
    pname: 'Mr Kofi Manu',
    fees: 65,
    pnumber: '0244513455',
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    class: 6,
    pname: 'Mr Kofi Manu',
    fees: 65,
    pnumber: '0244513455',
  },
];
