﻿(function() {
    'use strict';
    define(function (require) {


        var data = {
            level: {
                Headings: ["TICKET ID", "TICKET NAME", "TICKET DUE DATE", "TICKET STATUS"],
                TableRows: [
                    {
                        data: ["54613", "ticket name1", "12-12-2013", "open"],
                        level: {
                            Headings: ["TASK ID", "TASK NAME", "TASK DUE DATE", "TASK STATUS"],
                            TableRows: [
                                {
                                    data: ["1234", "task name1", "12-12-2013", "closed"]
                                },
                                {
                                    data: ["1235", "task name2", "12-11-2014", "open"]
                                },
                                {
                                    data: ["1235", "task name3", "01-02-2015", "open"]
                                }
                            ]
                        }
                    },
                    {
                        data: ["54613", "ticket name2", "1-12-2013", "closed"]
                    },
                    {
                        data: ["54614", "ticket name3", "22-12-2013", "closed"]
                    },
                    {
                        data: ["54615", "ticket name4", "13-12-2013", "closed"]
                    },
                    {
                        data: ["54616", "ticket name5", "15-12-2013", "open"],
                        level: {
                            Headings: ["TASK ID", "TASK NAME", "TASK DUE DATE", "TASK STATUS"],
                            TableRows: [
                                {
                                    data: ["1234", "task name1", "12-12-2013", "closed"],
                                    level: {
                                        Headings: ["ST ID", "ST NAME", "ST DUE DATE", "ST STATUS"],
                                        TableRows: [
                                            {
                                                data: ["1234", "ST name1", "12-12-2013", "closed"]
                                            },
                                            {
                                                data: ["1235", "ST name2", "12-11-2014", "open"],
                                                level: {
                                                    Headings: ["EMP ID", "EMP NAME", "EMP DOJ", "EMP DESIGNATION"],
                                                    TableRows: [
                                                        {
                                                            data:["525535", "Shailendra", "06-10-2014", "Sr. Web Developer"]
                                                        },
                                                        {
                                                            data:["525536", "Praveen", "22-10-2014", " Web Developer"]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                data: ["1235", "ST name3", "01-02-2015", "open"]
                                            }
                                        ]
                                    }
                                },
                                {
                                    data: ["1235", "task name2", "12-11-2014", "open"]
                                },
                                {
                                    data: ["1235", "task name3", "01-02-2015", "open"]
                                }
                            ]
                        }
                    },
                    {
                        data: ["54617", "ticket name6", "16-12-2013", "closed"]
                    },
                    {
                        data: ["54618", "ticket name7", "17-12-2013", "closed"]
                    },
                    {
                        data: ["54619", "ticket name8", "18-12-2013", "closed"]
                    },
                    {
                        data: ["54620", "ticket name9", "19-12-2013", "closed"]
                    },
                    {
                        data: ["54621", "ticket1", "02-05-2014", "open"],
                        level: {
                            Headings: ["Heading1", "Heading2", "Heading3"],
                            TableRows: [
                                {
                                    data: ["1", "some name", "1-12-2013"]
                                },
                                {
                                    data: ["5", "some name3", "2-12-2014"],
                                    level: {
                                        Headings: ["EmpId", "EmpName", "EmpDesgn"],
                                        TableRows: [
                                            {
                                                data: ["1", "Shailesh", "Programmer"]
                                            },
                                            {
                                                data: ["2", "Sachin", "Analyst"]
                                            },
                                            {
                                                data: ["3", "Shailu", "Manager"]
                                            },
                                            {
                                                data: ["5", "Shewag", "Programmer"]
                                            },
                                            {
                                                data: ["8", "Shailendra", "Sr.Manager"]
                                            },
                                            {
                                                data: ["6", "Sandeep", "Designer"]
                                            },
                                            {
                                                data: ["9", "Manoj", "Sr.Designer"]
                                            }

                                        ]
                                    }
                                },
                                {
                                    data: ["22", "some name4", "3-12-20135"]
                                },
                            ]
                        }
                    },
                    {
                        data: ["54622", "ticket2", "03-05-2012", "closed"]
                    },
                    {
                        data: ["54623", "ticket3", "05-03-2011", "closed"]
                    },
                    {
                        data: ["54624", "ticket4", "04-11-2015", "closed"]
                    },
                    {
                        data: ["54625", "ticket5", "05-02-2013", "closed"]
                    },
                    {
                        data: ["54616", "ticket name15", "15-12-2013", "open"],
                        level: {
                            Headings: ["TASK ID", "TASK NAME", "TASK DUE DATE", "TASK STATUS"],
                            TableRows: [
                                {
                                    data: ["1234", "task name1", "12-12-2013", "closed"],
                                    level: {
                                        Headings: ["ST ID", "ST NAME", "ST DUE DATE", "ST STATUS"],
                                        TableRows: [
                                            {
                                                data: ["1234", "ST name1", "12-12-2013", "closed"]
                                            },
                                            {
                                                data: ["1235", "ST name2", "12-11-2014", "open"]
                                            },
                                            {
                                                data: ["1235", "ST name3", "01-02-2015", "open"]
                                            }
                                        ]
                                    }
                                },
                                {
                                    data: ["1235", "task name2", "12-11-2014", "open"]
                                },
                                {
                                    data: ["1235", "task name3", "01-02-2015", "open"]
                                }
                            ]
                        }
                    },
                ]
            }
        };

        return data;
    });

})();