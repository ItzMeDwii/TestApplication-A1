const data = [
    {
        nama: "Indomie",
        harga: 3000,
        rating: 5,
        likes: 150
    },
    {
        nama: "Laptop ",
        harga: 4000000,
        rating: 4.5,
        likes: 123
    },
    {
        nama: "Aqua",
        harga: 3000,
        rating: 4,
        likes: 250
    },
    {
        nama: "Smart TV",
        harga: 4000000,
        rating: 4.5,
        likes: 42
    },
    {
        nama: "Headphone",
        harga: 4000000,
        rating: 3.5,
        likes: 90
    },
    {
        nama: "Very Smart TV",
        harga: 4000000,
        rating: 3.5,
        likes: 87
    }
]

const sortedData = data.sort((a, b) => a.harga == b.harga ? (a.rating == b.rating ? b.likes - a.likes : b.rating - a.rating) : a.harga - b.harga)

console.log(sortedData)
