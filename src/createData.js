exports.bidItem = function(bidItem) {
  return fetch("/biditems", {
    body: JSON.stringify(bidItem),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(response => response.json());
};
