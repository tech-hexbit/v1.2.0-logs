# FLow 1

- on_search_full_catalog_refresh

```
 on_search_full_catalog_refresh: {
      "invalid_attribute[0][0]": "Invalid attribute for item with category id: colour_name",
      "invalid_attribute[0][1]": "Invalid attribute for item with category id: colour_name",
      "invalid_attribute[0][2]": "Invalid attribute for item with category id: colour_name",
      "invalid_attribute[0][3]": "Invalid attribute for item with category id: colour_name"
    }
```

# Flow 3

- Generate Payload

# Flow 4

- on_cancel

```
    on_cancel: {
      "ordrupdtd": "order.updated_at timestamp should be greater than order.created_at timestamp",
      "precancelState.updatedAt": "precancel_state.updated_at of on_cancel is not equal with the on_confirm order.updated_at"
    }
```

# Flow 5

```
    on_cancel: {
      "invldCancellationID": "Invalid CancellationID 003 or not allowed for SNP",
      "precancelState.updatedAt": "precancel_state.updated_at of on_cancel is not equal with the on_status_out_for_delivery order.updated_at"
    }
```

- on_status_rto_delivered/disposed

```
    on_status_rto_delivered/disposed: {
      "message/order.fulfillments/0/start/time": "Mismatch occurred while comparing 'RTO' fulfillment object with on_status_rto_delivered/disposed on key 'start/time'",
      "message/order.fulfillments/1/tags/1": "Mismatch occurred while comparing 'Delivery' fulfillment object with on_status_rto_delivered/disposed on key 'tags/1'",
      "precancelState.updatedAt": "precancel_state.updated_at of on_status_rto_delivered/disposed is not equal with the on_status_out_for_delivery order.updated_at"
    }
```
