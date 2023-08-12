<template>
  <div>
    <div>
      <el-button type="primary" @click="handleAdd">添加</el-button>
    </div>
    <div class="table-container">
      <el-table
        :data="menus"
        row-key="id"
        :tree-props="{ children: 'children' }"
        border
        stripe
      >
        <el-table-column label="菜单名称" prop="name"></el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="父菜单ID" prop="parent_id"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button
              type="primary"
              size="mini"
              @click="handleAddSubmenu(row.id)"
              >添加子菜单</el-button
            >
            <el-button type="primary" size="mini" @click="handleEdit(row)"
              >修改</el-button
            >
            <el-button type="danger" size="mini" @click="handleDelete(row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :visible.sync="addDialogVisible" title="添加菜单" width="30%">
      <el-form :model="form" inline>
        <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="菜单ID" v-show="form.id">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item
          label="父菜单ID"
          v-show="form.parent_id && form.parent_id != 'null'"
        >
          <el-input v-model="form.parent_id" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAddMenu">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deleteMenuById, addMenu } from "@/api/menu";

export default {
  data() {
    return {
      addDialogVisible: false,
      form: {
        id: null,
        name: "",
        parent_id: null,
      },
    };
  },
  methods: {
    ...mapActions(["getMenus"]),
    handleAdd() {
      this.addDialogVisible = true;
    },
    handleAddSubmenu(id) {
      this.form.parent_id = id;
      this.addDialogVisible = true;
    },
    handleEdit(row) {
      this.form.name = row.name;
      this.form.id = row.id;
      if (row.parent_id !== null) {
        this.form.parent_id = row.parent_id;
      }
      this.addDialogVisible = true;
    },
    submitAddMenu() {
      let params = {
        name: this.form.name,
      };
      if (this.form.parent_id) {
        params.parent_id = this.form.parent_id;
      }
      if (this.form.id) {
        params.id = this.form.id;
      }
      addMenu(params).then((res) => {
        this.$message.success(res);
        this.getMenus();
        this.addDialogVisible = false;
        this.form.id = null;
        this.form.name = "";
        this.form.parent_id = null;
      });
    },
    handleDelete(menuId) {
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await deleteMenuById(menuId);
          this.$message.success("删除成功！");
          this.getMenus();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  computed: {
    ...mapState(["menus"]),
  },
  mounted() {
    console.log(this.menus);
  },
};
</script>

<style scoped>
.table-container {
  margin-top: 10px;
}
</style>