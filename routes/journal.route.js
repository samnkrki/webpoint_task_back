const express = require("express");
const journalController = require("../journal.controller");
const router = express.Router();

/**
 * @openapi
 * /journal:
 *  post:
 *     tags:
 *     - Journal
 *     summary: Create a journal record
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - publishedDate
 *            properties:
 *              title:
 *                type: string
 *              publishedDate:
 *                type: string
 *                format: date
 *              body:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      404:
 *        description: Not Found
 */
router.post("/",journalController.add);

/**
 * @openapi
 * /journal:
 * get:
 *      tags:
 *      - Journal
 *      summary: Fetch journal records list
 *      parameters:
 *      - name: limit
 *        in: query
 *        description: This is the total amount of journals that can be fetched
 *        required: true
 *      - name: page
 *        in: query
 *        description: This is the current page number
 *        required: true
 *      - name: search
 *        in: query
 *        description: This is a date string to filter data by date
 *      responses:
 *          200:
 *              description: successfully fetched
 *              content: 
 *                  application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      limit:
 *                          type: number
 *                      totalData:
 *                          type: number
 *                      totalPages:
 *                          type: number
 *                      currentPage:
 *                          type: number
 *                      data:
 *                          type: array
 *                          items:
 *                                type: object
 *                                properties:
 *                                    _id:
 *                                        type: string
 *                                    title:
 *                                        type: string
 *                                    body:
 *                                        type: string
 *                                    publishedDate:
 *                                        type: string
 *                                        format: date
 *      
 */
router.get("/",journalController.list);
module.exports = router;


