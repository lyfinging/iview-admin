<template>
    <Table row-key="id" :columns="columns16" :data="data12" border></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns16: [
                    {
                        title: 'Name',
                        key: 'name',
                        tree: true
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data12: [
                    {
                        id: '100',
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        id: '101',
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        children: [
                            {
                                id: '10100',
                                name: 'John Brown',
                                age: 18,
                                address: 'New York No. 1 Lake Park'
                            },
                            {
                                id: '10101',
                                name: 'Joe Blackn',
                                age: 30,
                                address: 'Sydney No. 1 Lake Park'
                            },
                            {
                                id: '10102',
                                name: 'Jon Snow',
                                age: 26,
                                address: 'Ottawa No. 2 Lake Park',
                                children: [
                                    {
                                        id: '1010200',
                                        name: 'Jim Green',
                                        age: 24,
                                        address: 'New York No. 1 Lake Park'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '102',
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        id: '103',
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        }
    }
</script>