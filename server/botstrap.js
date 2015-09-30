/**
 * Created by Eric on 9/30/2015.
 */

// run this when the meteor app is started
Meteor.startup(function() {
    if (Polls.find().count() === 0) {

        //create sample polls
        var samplePolls = [
            {
                question: 'is Meteor awesome?',
                choices: [
                    {text: 'of course!', votes: 0},
                    {text: 'eh', votes: 0},
                    {text: 'No. I like plain jS', votes: 0}
                ]
            },
            {
                question: 'is CSS3 flexbox the greatest thing since array_slice(bread)?',
                choices: [
                    {text:'100% yes', votes: 0},
                    {text:'140% yes', votes: 0},
                    {text:'200% yes', votes: 0}
                ]
            }
        ];

        //loop over each sample poll and insert into database
        _.each(samplePolls, function(poll) {
           Polls.insert(poll);
        });
    }
});