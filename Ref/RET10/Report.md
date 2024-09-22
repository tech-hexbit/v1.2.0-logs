# Flow 1

- Without Incremental Search.

```
    on_search_full_catalog_refresh: {
      "bpp/descriptor/accept_bap_terms": "accept_bap_terms is not required in bpp/descriptor/tags for now "
    }
```

- With Incremental Search.

# Flow 2

```
    on_search_full_catalog_refresh: {
      "bpp/descriptor/accept_bap_terms": "accept_bap_terms is not required in bpp/descriptor/tags for now "
    }
    on_init: {
      "message.order.tags[0].list": "accept_bap_terms is not required for now!"
    }
    on_status_pending: {
      "errmsg": "When the onConfirm Order State is 'Accepted', the on_status_pending is not required!"
    }
    on_status_picked: {
      "pickUpTime": "picked timestamp is missing"
    }
    on_status_out_for_delivery: {
      "out_for_delivery_time": "Out_for_delivery timestamp is missing"
    }
    on_status_delivered: {
      "deliverytime": "delivery timestamp is missing"
    }
```

# Flow 3

```
    on_search_full_catalog_refresh: {
      "bpp/descriptor/accept_bap_terms": "accept_bap_terms is not required in bpp/descriptor/tags for now "
    }
    on_init: {
      "message.order.tags[0].list": "accept_bap_terms is not required for now!"
    }
    on_status_pending: {
      "errmsg": "When the onConfirm Order State is 'Accepted', the on_status_pending is not required!"
    }
    on_status_picked: {
      "pickUpTime": "picked timestamp is missing"
    }
    on_status_out_for_delivery: {
      "out_for_delivery_time": "Out_for_delivery timestamp is missing"
    }
    on_status_delivered: {
      "deliverytime": "delivery timestamp is missing"
    }
```

# Flow 4

```
    on_search_full_catalog_refresh: {
      "bpp/descriptor/accept_bap_terms": "accept_bap_terms is not required in bpp/descriptor/tags for now "
    }
    on_init: {
      "message.order.tags[0].list": "accept_bap_terms is not required for now!"
    }
    on_cancel: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_cancel should be equal to the price as in on_confirm",
      "precancelState.fulfillment_state": "precancel_state.fulfillment_state of on_cancel is not equal with the on_confirm fulfillment state"
    }
```

# Flow 5

```
    on_search_full_catalog_refresh: {
      "bpp/descriptor/accept_bap_terms": "accept_bap_terms is not required in bpp/descriptor/tags for now "
    }
    on_init: {
      "message.order.tags[0].list": "accept_bap_terms is not required for now!"
    }
    on_status_pending: {
      "errmsg": "When the onConfirm Order State is 'Accepted', the on_status_pending is not required!"
    }
    on_status_picked: {
      "pickUpTime": "picked timestamp is missing"
    }
    on_status_out_for_delivery: {
      "out_for_delivery_time": "Out_for_delivery timestamp is missing"
    }
    on_cancel: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_cancel should be equal to the price as in on_confirm"
    }
    on_status_rto_delivered/disposed: {
      "inVldItemId[undefined]": "Invalid Item Id provided in quote object /on_status_rto_delivered/disposed: undefined",
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_cancel should be equal to the price as in on_confirm"
    }
```

# Flow 6 - A, B & C

```
    on_update_picked: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm"
    }

    on_update_delivered: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm"
    }

    on_update_part_cancel: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm"
    }
    on_update_approval: {
      "context/timestamp/": "context/timestamp of the previous call is missing or the previous action call itself is missing",
      "message/order.fulfillments/Cancel/tags/quote_trail": "Missing fulfillments/Cancel/tags/quote_trail as compare to the previous calls"
    }
    on_update_picked: {
      "returnFF/start/time/timestamp": "start/time/timestamp of return fulfillment should be in the valid time/range as in on_update_approval",
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm"
    }
    on_update_delivered: {
      "returnFF/start/time/timestamp": "start/time/timestamp of return fulfillment should be in the valid time/range as in on_update_approval",
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm"
    }
    on_update_interim_liquidated: {
      "message/order.fulfillments/Cancel/tags/quote_trail": "Missing fulfillments/Cancel/tags/quote_trail as compare to the previous calls"
    }
    on_update_liquidated: {
      "invldQuoteTrailPrices": "quote_trail price and item quote price sum for on_update should be equal to the price as in on_confirm",
      "message/order.fulfillments/Cancel/tags/quote_trail": "Missing fulfillments/Cancel/tags/quote_trail as compare to the previous calls"
    }
```
