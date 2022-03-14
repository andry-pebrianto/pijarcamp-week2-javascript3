const cekBilanganPrima = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === "number") {
      setTimeout(() => {
        let jumlahDibagi = 0;

        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            jumlahDibagi++;
          }
        }

        console.log(jumlahDibagi);
        if (jumlahDibagi > 2) {
          reject(new Error("Bukan prima!"));
        } else {
          resolve("Bilangan tersebut adalah prima!");
        }
      }, 3000);
    } else {
      reject(new Error("Parameter yang dimasukkan bukanlah number."));
    }
  });
};

cekBilanganPrima(100)
  .then((result) => console.log(result))
  .catch(({ message }) => console.log(message));
