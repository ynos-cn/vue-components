/*
 * @Description: 基础接口
 * @Version: 1.0
 */

/** 基础api请求类型 */
export interface BaseParams<T = any> {
  body?: T
  /** 当前页,示例值(1) */
  page?: number
  /** 分页大小, 示例值(10) */
  limit?: number
  /** 默认升序（1为升序，-1为降序）   */
  sorter?: {
    [key: string]: number
  }
}

/** 普通数据响应 */
export interface ResDataStruct<T = any> {
  /** 响应内容体 */
  data: T,
  /** api响应信息 */
  msg: string,
  /** api响应编码 */
  code: number,
  /** 当前请求页数 */
  page: number,
  /** 内容最大限制 */
  limit: number,
  /** api接口返回是否成功 */
  success: boolean,
  /** api接口查询数据库总数 */
  total: number,
}

/**
 * 基础数据结构
 */
export interface BaseStruct {
  /** 唯一id */
  id?: number
  /** 创建人 */
  createById?: string
  /** 创建时间 */
  createTime?: string
  /** 更新时间 */
  updateTime?: string
  /** 更新人 */
  updateById?: string
  /** 所属机构id */
  orgId?: number
}

/** 机构 */
export interface OrgStruct extends BaseStruct {
  /** 名称 */
  name: string
  /** 机构代码 */
  code: string
  /** 负责人名称 */
  controllerName: string
  /** 负责人联系电话 */
  controllerTel: string
  /** 所属机构 */
  orgName?: string
  [key: string]: any
}
