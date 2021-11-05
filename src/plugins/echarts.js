import echarts from 'echarts'

const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    line: function(id) {
                        var dom = document.getElementById(id);
                        var myChart = echarts.init(dom);

                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [150, 230, 224, 218, 135, 147, 260],
                                type: 'line'
                            }]
                        };
                        myChart.setOption(option, true);
                    },
                    chinaMap: function(id) {
                        var dom = document.getElementById(id);
                        var myChart = echarts.init(dom);

                        var option = {
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                roam: true,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0.1)',
                                        borderColor: 'rgba(118,237,236,1)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(118,237,236,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        };
                        myChart.setOption(option, true);
                    }
                }
            }
        }
    })
}

export default install