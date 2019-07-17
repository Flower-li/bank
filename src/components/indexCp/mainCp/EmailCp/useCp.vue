<template>
  <div class="useCp">
    <el-row>
      <el-col>
        <h1>使用说明</h1>
      </el-col>
      <el-col>
        # 邮件服务器的SMTP地址，可选，默认为smtp <br />
        #邮件服务器的SMTP端口，可选，默认465或者25 \ <br />
        #发件人（必须正确，否则发送失败） <br />
        # 用户名，默认为发件人邮箱前缀 <br />
        #密码（注意，某些邮箱需要为SMTP服务单独设置密码，如QQ和163等等） <br />
        #是否开启ssl，默认开启 <br />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "useCp"
};
</script>

<style></style>
