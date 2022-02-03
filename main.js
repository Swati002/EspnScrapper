const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

request(url, cb)

function cb(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        // console.log(html)
        extractLink(html)
    }
}

function extractLink(html) {
    // $ --> selector tool
    let $ = cheerio.load(html)
    let anchorElement = $('a[data-hover="View All Results"]') /* get view results data in anchor tag*/


    // To extract just the href attribute from anchor tag of [data-hover="View All Results"] -->
    let link = anchorElement.attr('href')
    let fullLink = 'https://www.espncricinfo.com' + link
    console.log(fullLink) /* --> view all results */

    getAllMatchesLink(fullLink)
}

function getAllMatchesLink(url) {
    request(url, function(err, response, html) {
        if (err) {
            console.log(err)
        } else {
            extractAllLink(html)
        }
    })
}

function extractAllLink(html) {
    let $ = cheerio.load(html)

    let scoreCardArr = $('a[data-hover="Scorecard"]')

    for (let i = 0; i < scoreCardArr.length; i++) {
        let link = $(scoreCardArr[i]).attr('href');
        let fullLink = 'https://www.espncricinfo.com' + link
            // console.log(fullLink);
    }
}