import socketClusterClient from "socketcluster-client";

const socketToken = "";
const config = {
  hostname: "......",
  secure: true,
  port: "",
  autoReconnect: true,
  autoReconnectOptions: {
    //removed
  },
  authEngine: {
    //removed
  },
};

const removeObjectKeyPrefix = (prefix, item) => {
  return Object.entries(item).reduce((acc, [key, value]) => {
    key = key.replace(prefix, "");
    acc[key] = value;
    return acc;
  }, {});
};

/**
 *
 * @param {[string]} symbols Symbols list, for e.g. ['EURUSD', 'BTCUSD']
 */
const main = (symbols = []) => {
  const socket = socketClusterClient.create(config);

  /**
   *
   * @returns {Promise<[PriceObject]>}
   */
  const getPrices = async () => {
    const body = {
      tabName: "mtPrices",
      fields: [
        //removed
      ],
      filters: [
        //removed
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

      return data.map((item) => {
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
  };

  const subscribeToSymbolsChannels = (cb) => {
    //codeRemoved
    //codeRemoved
    //codeRemoved
    //codeRemoved
    //codeRemoved
    //codeRemoved
  };

  const initConnectionListener = async () => {
    for await (const event of socket.listener("connect")) {
      console.log("Socket is connected");
    }
  };

  const initErrorsListener = async () => {
    for await (const { error } of socket.listener("error")) {
      console.error(error);
    }
  };

  return {
    getPrices,
    subscribeToSymbolsChannels,
    initConnectionListener,
    initErrorsListener,
  };
};

export default main;
