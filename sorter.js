var replies = []

$('.post').each((index, element) => {
    var upvotes = $(element).find('.post-upvotes').html()

    if (index === 0) {
        return;
    } else if (!upvotes) {
        upvotes = 0
    }

    replies.push([upvotes, element])
});

replies.sort((a, b) => {
    return b[0] - a[0]
})

$('.replies').children().remove()

replies.forEach(reply => {
    $('.replies').append(reply[1])
})

console.log(replies)

