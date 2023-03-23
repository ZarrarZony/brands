import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 4000;

const removeObjectKeyPrefix = (prefix, item) => {
  return Object.entries(item).reduce((acc, [key, value]) => {
    key = key.replace(prefix, "");
    acc[key] = value;
    return acc;
  }, {});
};

app.get("/prices", async (req, res) => {
  let prices = {};
  const { symbols } = req.query;
  if (!symbols) res.send("empty symbol");
  console.log(symbols.split(","));

  const body = {
    tabName: "mtPrices",
    fields: [
      //
    ],
    filters: [
      {
        entity: "mtPrices",
        entityField: "symbol",
        value: symbols,
        mode: "TEM",
      },
    ],
  };
  const url = "";
  const token = "";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        authorization: ``,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const { data } = await response.json();

    prices = data.map((item) => {
      const {
        askLast: ask,
        bidLast: bid,
        digits,
        symbol,
      } = removeObjectKeyPrefix("mtPrices.", item);
      return { ask, bid, digits, symbol };
    });
  } catch (err) {
    console.error(err);
  }
  res.send(prices);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
