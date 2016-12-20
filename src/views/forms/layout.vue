<template>
    <el-row>
        <el-row>
            <el-col :span="24">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="el-icon-minus"></i>
                            <span class="caption-subject font-red-sunglo">单列布局</span>
                        </div>
                    </div>
                    <div class="portlet-body form">
                        <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="100px">
                            <el-form-item label="活动名称" prop="name">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域" prop="region">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="活动时间">
                                <el-col :span="11">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="活动天数" prop="day">
                                <el-input v-model="form.day"></el-input>
                            </el-form-item>
                            <el-form-item label="即时配送">
                                <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                            </el-form-item>
                            <el-form-item label="活动性质">
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="线上品牌商赞助"></el-radio>
                                    <el-radio label="线下场地免费"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动形式">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                            <span class="caption-subject font-red-sunglo">平行两列布局</span>
                        </div>
                    </div>
                    <div class="portlet-body form">
                        <el-form ref="TwoColsForm" label-position="left" :rules="rules" :model="TwoColsForm" label-width="100px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="单选样式" prop="radioStyle">
                                        <el-radio-group v-model="TwoColsForm.radioStyle">
                                            <el-radio-button label="上海"></el-radio-button>
                                            <el-radio-button label="北京"></el-radio-button>
                                            <el-radio-button label="广州" :disabled="true"></el-radio-button>
                                            <el-radio-button label="深圳"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="年龄" prop="age">
                                        <el-input-number v-model="TwoColsForm.age" @change="handleChange" :min="1" :max="10"></el-input-number>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="上传附件">
                                        <el-upload action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="TwoColsForm.fileList">
                                            <el-button size="small" type="primary">点击上传</el-button>
                                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                        </el-upload>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
export default {
    data() {
            var checkDay = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('活动天数不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 5) {
                            callback(new Error('活动天数必须大于5天'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            return {
                date: new Date(),
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                TwoColsForm: {
                    fileList: [{
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }, {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }]
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }],
                    region: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }],
                    day: [{
                        required: true,
                        message: '请输入天数',
                        trigger: 'blur'
                    }, {
                        validator: checkDay,
                        trigger: 'blur'
                    }]
                }

            }
        },
        methods: {
            handleReset() {
                this.$refs.form.resetFields();
            },
            onSubmit(ev) {
                console.log('submit!');
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleChange(value) {
                console.log(value);
            }
        }
}
</script>
<style>
.caption-subject {
    font-size: 16px;
    font-weight: 700 !important;
}

.font-red-sunglo {
    color: #E26A6A !important;
}
</style>
