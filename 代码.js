//----------------------------------------IF/ELSE ---------------------------------------
{
    /* 原A */
    if (eventData.field == "tm_shop_no") {
        eventData.item.shop_name = eventData.editerSelectItem.shop_name;
        eventData.item.shop_address = eventData.editerSelectItem.shop_address;
        this.$refs.dispalygrid.updateItem(eventData.item)
    }
    if (eventData.field == "whh_cus_no") {
        eventData.item.shop_id = eventData.editerSelectItem.shop_id;
        this.$refs.dispalygrid.updateItem(eventData.item)
    }

    /* 修改A */
    let {field} = eventData;
    switch (field) {
        case 'tm_shop_no':
            // xxxx
            break;
        case 'whh_cus_no':
            // xxxx
            break;
        default:
    }
    this.$refs.dispalygrid.updateItem(eventData.item);
}

{
    /* 原B */
    if (A) {
        // xxx
    } else if (B) {
        // xxx
    } else if {
        //....
    }

    /* 修改B */
    // let callbacks = [callbackA, callbackB, callbackC];
    let callbacks = {
        a: callbackA,
        b: callbackB,
    }
    let curCb = callbacks[index/key];
    curC();


    function callbackA(){}
    function callbackB(){}
}

//----------------------------------------冒泡---------------------------------------

{
    <div onclick="handleOperate">
        <div data-key="minus"> - </div>
        <input data-key="input" />
        <div data-key="plus"> + </div>
    </div>

    handleOperate: function(event) {
        let {currentTarget, target} = event;
        let {key} = target && target.dataset;
        if (key == 'minus') {
            minusCallback();
        }
    }

    minusCallback: function() {

    }
}

//----------------------------------------var/let/const---------------------------------------
{
    var currDate = new Date();
    var item = this.$refs.grid01.getModifyCache();
    var source = this.$refs.grid01.getData();
    var insertItems = item.insertItems;

    var currDate = new Date(),
        item = this.$refs.grid01.getModifyCache(),
        source = this.$refs.grid01.getData(),
        insertItems = item.insertItems;

    let [currDate, grid01] = [new Date(), this.$refs.grid01];
    let [item, source] = [grid01.getModifyCache(), grid01.getData()];
    let insertItems = {item};
}


