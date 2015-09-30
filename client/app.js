/**
 * Created by Eric on 9/30/2015.
 */
Templace.body.helpers({

    polls: function() {
        return Polls.find();
    }
});


//add index to each item
UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index;
            return item;
        });
    }
});