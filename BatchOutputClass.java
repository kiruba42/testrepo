package com.kvk.main.dto;

public class BatchOutputClass {

	private String keyword;
	private String usecasename;
	private String physicaldatamodel30;
	private String physicaldatamodel256;
	private String cobolname;
	private String productsystemname;
	private String productshortname;
	private String objectmodelname;
	private String objectlanguage;
	private String xmldtdname;
	private String xmllongname;
	private String logicalname;
	private String pascalname;
	private String pascalnameabbreviated;
	private String titlecase;
	public BatchOutputClass() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BatchOutputClass(String keyword, String usecasename, String physicaldatamodel30, String physicaldatamodel256,
			String cobolname, String productsystemname, String productshortname, String objectmodelname,
			String objectlanguage, String xmldtdname, String xmllongname, String logicalname, String pascalname,
			String pascalnameabbreviated, String titlecase) {
		super();
		this.keyword = keyword;
		this.usecasename = usecasename;
		this.physicaldatamodel30 = physicaldatamodel30;
		this.physicaldatamodel256 = physicaldatamodel256;
		this.cobolname = cobolname;
		this.productsystemname = productsystemname;
		this.productshortname = productshortname;
		this.objectmodelname = objectmodelname;
		this.objectlanguage = objectlanguage;
		this.xmldtdname = xmldtdname;
		this.xmllongname = xmllongname;
		this.logicalname = logicalname;
		this.pascalname = pascalname;
		this.pascalnameabbreviated = pascalnameabbreviated;
		this.titlecase = titlecase;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getUsecasename() {
		return usecasename;
	}
	public void setUsecasename(String usecasename) {
		this.usecasename = usecasename;
	}
	public String getPhysicaldatamodel30() {
		return physicaldatamodel30;
	}
	public void setPhysicaldatamodel30(String physicaldatamodel30) {
		this.physicaldatamodel30 = physicaldatamodel30;
	}
	public String getPhysicaldatamodel256() {
		return physicaldatamodel256;
	}
	public void setPhysicaldatamodel256(String physicaldatamodel256) {
		this.physicaldatamodel256 = physicaldatamodel256;
	}
	public String getCobolname() {
		return cobolname;
	}
	public void setCobolname(String cobolname) {
		this.cobolname = cobolname;
	}
	public String getProductsystemname() {
		return productsystemname;
	}
	public void setProductsystemname(String productsystemname) {
		this.productsystemname = productsystemname;
	}
	public String getProductshortname() {
		return productshortname;
	}
	public void setProductshortname(String productshortname) {
		this.productshortname = productshortname;
	}
	public String getObjectmodelname() {
		return objectmodelname;
	}
	public void setObjectmodelname(String objectmodelname) {
		this.objectmodelname = objectmodelname;
	}
	public String getObjectlanguage() {
		return objectlanguage;
	}
	public void setObjectlanguage(String objectlanguage) {
		this.objectlanguage = objectlanguage;
	}
	public String getXmldtdname() {
		return xmldtdname;
	}
	public void setXmldtdname(String xmldtdname) {
		this.xmldtdname = xmldtdname;
	}
	public String getXmllongname() {
		return xmllongname;
	}
	public void setXmllongname(String xmllongname) {
		this.xmllongname = xmllongname;
	}
	public String getLogicalname() {
		return logicalname;
	}
	public void setLogicalname(String logicalname) {
		this.logicalname = logicalname;
	}
	public String getPascalname() {
		return pascalname;
	}
	public void setPascalname(String pascalname) {
		this.pascalname = pascalname;
	}
	public String getPascalnameabbreviated() {
		return pascalnameabbreviated;
	}
	public void setPascalnameabbreviated(String pascalnameabbreviated) {
		this.pascalnameabbreviated = pascalnameabbreviated;
	}
	public String getTitlecase() {
		return titlecase;
	}
	public void setTitlecase(String titlecase) {
		this.titlecase = titlecase;
	}
	@Override
	public String toString() {
		return "BatchOutputClass [keyword=" + keyword + ", usecasename=" + usecasename + ", physicaldatamodel30="
				+ physicaldatamodel30 + ", physicaldatamodel256=" + physicaldatamodel256 + ", cobolname=" + cobolname
				+ ", productsystemname=" + productsystemname + ", productshortname=" + productshortname
				+ ", objectmodelname=" + objectmodelname + ", objectlanguage=" + objectlanguage + ", xmldtdname="
				+ xmldtdname + ", xmllongname=" + xmllongname + ", logicalname=" + logicalname + ", pascalname="
				+ pascalname + ", pascalnameabbreviated=" + pascalnameabbreviated + ", titlecase=" + titlecase + "]";
	}
}
